import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {
  return (

    <>

      <div className='max-w-screen-xl  mx-auto py-8'>

        <AwesomeSlider animation="cubeAnimation">
          <div data-src="https://i.ibb.co/y5KkP00/banner1.jpg" />
          <div data-src="https://i.ibb.co/6mzvc5N/banner2.jpg" />
          <div data-src="https://i.ibb.co/BgGGhWb/banner3.jpg" />
        </AwesomeSlider>

      </div>
    </>
  );
};

export default Banner;