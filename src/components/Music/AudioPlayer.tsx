import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AudioPlayer({ audioSrc, name, userName }: { audioSrc: string, name: string, userName: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current!;
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration * 1000);
        });
        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime * 1000);
        });
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
        });
        return () => {
            audio.removeEventListener('loadedmetadata', () => { });
            audio.removeEventListener('timeupdate', () => { });
            audio.removeEventListener('ended', () => { });
        };
    }, []);

    useEffect(() => {
        setIsPlaying(true)
    }, [audioSrc])

    const handlePlayPause = () => {
        const audio = audioRef.current!;
        if (isPlaying) {
            audio.pause();
        } else {
            audio!.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current!;
        const time = Number(e.target.value);
        audio.currentTime = time / 1000;
        setCurrentTime(time);
    };

    return (
        <div className='flex gap-4'>
            <audio ref={audioRef} src={audioSrc} autoPlay hidden />
            <button className='block w-16' onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            <div className='w-full'>
                <p className='font-semibold h-4'>{name}</p>
                <Link to={`/users/${userName}`} className='text-xs h-0 text-link-color hover:underline'>{userName}</Link>
                <input className='block'
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeChange}
                />
            </div>
        </div>
    );
};