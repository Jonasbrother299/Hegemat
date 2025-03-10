import React, { useEffect, useRef } from 'react';

export default function Card() {
  const cardsRef = useRef();
  const animationFrame = useRef(null);
  const lastEvent = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Save the latest event
      lastEvent.current = e;
      // If no frame is scheduled, schedule one
      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(() => {
          const event = lastEvent.current;
          const cards = cardsRef.current.querySelectorAll('.card');
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
          });
          animationFrame.current = null;
        });
      }
    };

    const cardsElement = cardsRef.current;
    cardsElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardsElement.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

    return (
        <div id="cards" ref={cardsRef}>
           
        <div className="card">
          <div className="card-content">
            <div className="card-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-svg"><path fill="#FFD43B" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Accurate Detection</h3>
                  <h4>AI-driven sensors ensure precise boar recognition and fewer false triggers.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <div className="card-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="my-svg"><path fill="#FFD43B" d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Automated Feeding</h3>
                  <h4>Hands-free operation dispenses feed exactly when it’s needed.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <div className="card-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-svg"><path fill="#FFD43B" d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448l0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Resource Efficiency</h3>
                  <h4>Dispenses feed only when necessary, minimizing waste and cost.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-svg"><path fill="#FFD43B" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Time-Saving Convenience</h3>
                  <h4>Automates feeding so hunters can avoid frequent trips into the woods, saving both time and resources.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <div className="card-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="my-svg"><path fill="#FFD43B" d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Keeps Boars in the Woods</h3>
                  <h4>Encourages wild boars to stay in their natural habitat, reducing conflicts with farmland and residential areas.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <div className="card-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="my-svg"><path fill="#FFD43B" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg>
            </div>
            <div className="card-info-wrapper">
              <div className="card-info">
                <div className="card-info-title">
                  <h3>Rugged Build</h3>
                  <h4>Weatherproof enclosure stands up to harsh outdoor conditions.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
}