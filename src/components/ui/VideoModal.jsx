import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaPause,
} from "react-icons/fa";

/**
 * Video Modal Component
 * Supports: YouTube, Vimeo, MP4/WebM files, and custom embeds
 *
 * Props:
 * - isOpen: boolean - Controls visibility
 * - onClose: function - Close handler
 * - videoUrl: string - Video URL (YouTube, Vimeo, or direct video file)
 * - title: string - Optional title
 * - type: 'youtube' | 'vimeo' | 'custom' - Auto-detected if not provided
 */

const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title = "Company Overview",
  type,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Detect video type from URL if not specified
  const detectVideoType = (url) => {
    if (!url) return "custom";
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return "youtube";
    if (url.includes("vimeo.com")) return "vimeo";
    return "custom";
  };

  const videoType = type || detectVideoType(videoUrl);

  // Generate embed URLs
  const getEmbedUrl = () => {
    switch (videoType) {
      case "youtube":
        // Extract video ID from various YouTube URL formats
        const youtubeId = videoUrl.match(
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
        )?.[1];
        return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

      case "vimeo":
        const vimeoId = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
        return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0`;

      default:
        return videoUrl;
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Video event handlers for custom videos
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100,
      );
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
              <h3 className="text-white font-semibold text-lg flex items-center gap-3">
                <FaPlay className="text-accent-500" />
                {title}
              </h3>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center text-white transition-colors group"
                aria-label="Close video"
              >
                <FaTimes className="group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black">
              {videoType === "youtube" || videoType === "vimeo" ? (
                /* Embedded Video (YouTube/Vimeo) */
                <iframe
                  src={getEmbedUrl()}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Custom HTML5 Video Player */
                <>
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    className="w-full h-full object-contain"
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {/* Custom Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1.5 bg-white/30 rounded-full mb-4 cursor-pointer group"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = (e.clientX - rect.left) / rect.width;
                        if (videoRef.current) {
                          videoRef.current.currentTime =
                            percent * videoRef.current.duration;
                        }
                      }}
                    >
                      <div
                        className="h-full bg-accent-500 rounded-full transition-all relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        >
                          {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        >
                          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>

                        <span className="text-white text-sm font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <button
                        onClick={toggleFullscreen}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                      >
                        {isFullscreen ? <FaCompress /> : <FaExpand />}
                      </button>
                    </div>
                  </div>

                  {/* Center Play Button (when paused) */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent-500/90 hover:bg-accent-500 flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-2xl"
                    >
                      <FaPlay className="text-2xl ml-1" />
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Footer Info */}
            <div className="px-6 py-4 bg-gray-800/50 flex items-center justify-between text-sm text-gray-400">
              <p>Press ESC to close • Click outside to dismiss</p>
              <div className="flex items-center gap-4">
                <button className="hover:text-white transition-colors">
                  Share
                </button>
                <button className="hover:text-white transition-colors">
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
