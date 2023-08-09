import React, { useEffect, useState } from 'react';
import './carousel.css'; //will be added later
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './carousel.css'; //will be added later
import { Box, Grid } from '@mui/material';
import Button from 'react-bootstrap/Button';

const Carousel = (props) => {
  const { children, deviceHeight } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children?.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Box style={{ height: '100%' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs>
          <center>
            {currentIndex > 0 && (
              <Button variant="primary" onClick={prev} size="sm">
                <AiFillCaretLeft />
              </Button>
            )}
          </center>
        </Grid>
        <Grid item xs={8} sm={10} md={8} lg={6}>
          <center>
            <div className="carousel-content-wrapper">
              <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {children}
              </div>
            </div>
          </center>
        </Grid>
        <Grid item xs>
          <center>
            {currentIndex < length - 1 && (
              <Button variant="primary" onClick={next} size="sm">
                <AiFillCaretRight />
              </Button>
            )}
          </center>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
