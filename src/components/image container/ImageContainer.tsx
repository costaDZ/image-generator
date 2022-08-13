import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import InfoBox from './InfoBox';
import { ImageContainerStyles } from './imageContainer-styles';

interface ImageContainerProps {
  data: Hit;
  kind: any;
  isLoading: any;
  goToDownload: any;
  LoadMainImages: any;
  startSearchingVideos: any;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  data,
  kind,
  isLoading,
  goToDownload,
  LoadMainImages,
  startSearchingVideos
}: ImageContainerProps) => {
  const [play, setPlay] = useState(false);
  const [loader, setLoader] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { id, likes, comments, tags, webformatURL, duration, videos, picture_id } = data;

  const src = `https://i.vimeocdn.com/video/${picture_id}_640x360.jpg`;

  useEffect(() => {
    const loaderTrigger = setTimeout(() => {
      setLoader(false);
    }, 1200);
    return () => clearTimeout(loaderTrigger);
  }, []);

  let timer: ReturnType<typeof setTimeout>;

  function playVideo(v: string) {
    let itemkind;
    if (containerRef.current) {
      itemkind = containerRef.current.dataset.kind;
    }
    if (itemkind === 'video') {
      if (v === 'set') {
        clearTimeout(timer);
        timer = setTimeout(() => {
          setPlay(true);
        }, 1000);
      } else {
        setPlay(false);
        clearTimeout(timer);
      }
    }
  }

  useEffect(() => {
    const video = document.createElement('video');
    let firstChild: Element | null;
    if (containerRef.current && containerRef.current.firstElementChild) {
      firstChild = containerRef.current.firstElementChild.firstElementChild;
      if (firstChild !== null) {
        if (videos && play) {
          video.classList.add('hovering_video');
          video.setAttribute('autoPlay', 'true');
          video.setAttribute('muted', 'true');
          video.setAttribute('loop', 'true');
          const source = document.createElement('source');
          source.setAttribute('src', `${videos.tiny.url}`);
          source.setAttribute('type', 'video/ogg');
          if (window.innerWidth <= 600) {
            video.setAttribute('width', '100');
            video.setAttribute('height', '100');
          }
          video.appendChild(source);
          containerRef.current.firstElementChild.prepend(video);
        } else if (videos && !play && firstChild.tagName === 'VIDEO') {
          containerRef.current.firstElementChild.removeChild(firstChild);
        }
      }
    }
  }, [play]);

  return (
    <ImageContainerStyles
      key={id}
      onMouseOver={() => playVideo('set')}
      onMouseLeave={() => playVideo('t')}
      video={duration ? 'video' : 'image'}
      ref={containerRef}
      data-kind={duration ? 'video' : 'image'}>
      {loader || isLoading ? (
        <Loader />
      ) : (
        <>
          <Link
            to={`/download/${id}`}
            onClick={() => {
              goToDownload(data);
              const target = tags.split(',')[0];
              if (videos) {
                startSearchingVideos('all', target, 1, 8);
              } else {
                LoadMainImages(kind, target, 1, 8);
              }
            }}>
            <img src={webformatURL || src} height="400" width="400" alt={tags} loading="lazy" />
          </Link>
          <InfoBox
            data={data}
            id={id}
            videos={videos}
            tags={tags}
            kind={duration ? 'video' : 'image'}
            duration={duration}
            likes={likes}
            comments={comments}
            currentLocation={kind}
            goToDownload={goToDownload}
            LoadMainImages={LoadMainImages}
            startSearchingVideos={startSearchingVideos}
          />
        </>
      )}
    </ImageContainerStyles>
  );
};

export default ImageContainer;
