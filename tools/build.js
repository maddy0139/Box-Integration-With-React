/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating Minified bundle for production'.blue);

webpack(webpackConfig).run((err,stats) =>{
  if(err){
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();
  if(jsonStats.hasError){
    return jsonStats.errors.map(error => console.log(error.red));
  }
  if(jsonStats.hasWarnings){
    console.log('Warnings: '.bold.yelloe);
    jsonStats.Warnings.map(Warning => console.log(Warning.yellow));
  }
  console.log(`webpack stats: ${stats}`);

  console.log('bundle.js has been compiled in /dist folder'.green);

  return 0;

});
