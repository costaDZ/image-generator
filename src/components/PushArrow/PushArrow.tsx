import { useState, useEffect } from 'react';
import styled from 'styled-components';

function PushArrow() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handelScrollEvent = () => {
      const currentScroll = window.scrollY;
      const totalHeight = window.innerHeight;
      currentScroll > totalHeight * 2 ? setShow(true) : setShow(false);
    };
    window.addEventListener('scroll', handelScrollEvent);

    return () => window.removeEventListener('scroll', handelScrollEvent);
  }, []);

  return (
    <PushArrowStyles
      style={{ display: show ? 'block' : 'none' }}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
      <i className="bi bi-arrow-up-circle"></i>
    </PushArrowStyles>
  );
}

export default PushArrow;

const PushArrowStyles = styled.div`
  position: fixed;
  right: 0.5em;
  font-size: 2em;
  z-index: 100;
  bottom: 1em;
  background-color: var(--light-green-color);
  border: 2px solid var(--green-color);
  padding: 0em 0.1em;
  cursor: pointer;
  border-radius: 11px;
`;
