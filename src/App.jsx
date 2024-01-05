import gsap from 'gsap';
import { useRef } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);



function App() {
  const containerRef = useRef();

  useEffect(() => {
    const initAnimations = () => {
      gsap.to('.main-title', {
        opacity: 0,
        // y: 50,
        y:400,
        duration: 10,
        scrollTrigger: {
          trigger: '.main-title',
          start: 'top center-=50',
          end: 'bottom center-=500',
          scrub: true,
        },
      });

      gsap.to('.gallery__left', {
        y: '-20%',
        duration: 10,
        scrollTrigger: {
          trigger: '.gallery__left',
          start: 'top ', 
          end: 'bottom center',
          scrub: true,
        },
      });
      gsap.to('.hero', {
        y: 300,
        duration:10,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top+=20', 
          end: 'bottom center',
          scrub: true,
        },
      });
      gsap.fromTo('.hero-section',{opacity:1},{
        opacity:0,
        scrollTrigger:{
          trigger:'.hero-section',
          start:'top',
          end:'900',
          scrub:true

        }
      });
      let itemsL=gsap.utils.toArray('.gallery__left .gallery__item');

      itemsL.forEach((item)=>{
        gsap.fromTo(item,{x:-50,opacity:0.2},{
          opacity:1, x:0,
          scrollTrigger:{
            trigger:item,
            scrub:true,
          }
        })
      })
      let itemsR=gsap.utils.toArray('.gallery__right .gallery__item');
      itemsR.forEach((item)=>{
        gsap.fromTo(item,{x:50,opacity:0.2},{
          opacity:1,x:0,
          scrollTrigger:{
            trigger:item,
            scrub:true
          }
        })
      })
      
      
      
    };

    initAnimations();

    
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    });
  }, []);
  return (
    <>
      <div className="wrapper" ref={containerRef}>
        <div className="content">
          <header className="hero-section">
            <img src="hero.png" className="hero" alt="" />
            <div className="container">
              <div className="main-header">
                <h1 className="main-title" >creative scroll</h1>
              </div>
            </div>
          </header>
          <div className="portfolio">
            <div className="container">
              <main className="gallery">
                <div className="gallery__left" >
                  <img className="gallery__item" src="work/1.jpg" alt="" />
                  <img className="gallery__item" src="work/2.jpg" alt="" />
                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      def do eiusmod tempor amount scrolling.{' '}
                    </p>
                    <img className="gallery__item" src="work/6.jpg" alt="" />
                  </div>
                </div>
                <div className="gallery__right">
                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      def do eiusmod tempor amount scrolling.{' '}
                    </p>
                  </div>
                  <img className="gallery__item" src="work/4.jpg" alt="" />
                  <img className="gallery__item" src="work/5.jpg" alt="" />
                  <img className="gallery__item" src="work/3.jpg" alt="" />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
