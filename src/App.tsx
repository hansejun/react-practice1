import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const Grid = styled.div`
  width: 700px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 200px);
  gap: 10px;
  justify-content: center;
  align-content: center;
`;
const Box = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff7979;
`;
const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MotionBox = styled(motion.div)`
  width: 200px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
`;
const ChangeBtn = styled.button``;
function App() {
  const [id, setId] = useState<string | null>(null);
  const [isTrue, setIsTrue] = useState(true);
  const overlayVar = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Wrapper>
        <Grid>
          <Box
            whileHover={{ scale: 1.2, x: -30, y: -20 }}
            layoutId={"1"}
            onClick={() => setId("1")}
          />
          <Box
            whileHover={{ scale: 1.2, x: 30, y: -20 }}
            layoutId={"2"}
            onClick={() => setId("2")}
          >
            {isTrue ? <Circle layoutId="circle" /> : null}
          </Box>
          <Box
            whileHover={{ scale: 1.2, x: -30, y: 20 }}
            layoutId={"3"}
            onClick={() => setId("3")}
          >
            {isTrue ? null : <Circle layoutId="circle" />}
          </Box>
          <Box
            whileHover={{ scale: 1.2, x: 30, y: 20 }}
            layoutId={"4"}
            onClick={() => setId("4")}
          />
        </Grid>
        <ChangeBtn onClick={() => setIsTrue((prev) => !prev)}>Switch</ChangeBtn>
        <AnimatePresence>
          {id ? (
            <Overlay
              variants={overlayVar}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setId(null)}
            >
              <MotionBox layoutId={id} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
