import { styled } from "styled-components";

export default function Loader() {
  const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  `;

  return (
    <>
      <h1>Loading...</h1>
      <Loader>
        <span>Loading...</span>
      </Loader>
    </>
  );
}
