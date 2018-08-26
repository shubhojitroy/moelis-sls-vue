const images = require.context('../assets/images', true, /\.png$/);

const parts = {
  logos: [
    {
      src: images('./moelis-logo.png'),
    },
  ],
};
export default parts;
