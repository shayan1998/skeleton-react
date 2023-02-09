import styled from "styled-components";

const borderRadius = "5px";

const Effect = styled.div`
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.6) 90%,
      rgba(255, 255, 255, 0.7) 95%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(10px);
    animation: loading 1.5s infinite;
    z-index: 100;

    @keyframes loading {
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;

const Base = styled(Effect)`
  border-radius: ${borderRadius};
  background: #e2e2e2;
  margin: 0.4rem;
`;

export { Base };
