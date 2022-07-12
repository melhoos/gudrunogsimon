import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const Lottie = (props) => {
  useEffect(() => {
    const hoverElement = document.getElementById(
      `${props.id}-parent`
    );
    const animation = lottie.loadAnimation({
      container: document.getElementById(props.id),
      animationData: props.icon,
      loop: false,
      autoplay: false,
    });

    const handleMouseEvent = () => {
      animation.setDirection(1);
      animation.play();
    };

    hoverElement.addEventListener('mouseenter', () => {
      handleMouseEvent();
    });

    return () => {
      hoverElement.removeEventListener('mouseenter', () => handleMouseEvent());
      animation.destroy();
    };
  });

  function smoothScrollTo() {
    if (props.linkTag && document.getElementById(props.linkTag)) {
        document.getElementById(props.linkTag).scrollIntoView({
            block: 'start',
            inline: 'nearest',
        });
    } else {
        return;
    }
   
  }

  return (
    <div id={props.id + '-parent'}>
      <div id={props.id} style={{ height: props.sizeInPx ? props.sizeInPx + 'px' : "30px" }} />
      <label onClick={smoothScrollTo}>{props.label}</label>
    </div>
  );
};

export default Lottie;