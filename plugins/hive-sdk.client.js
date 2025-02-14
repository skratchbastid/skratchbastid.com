export default defineNuxtPlugin((nuxtApp) => {
    const YOUR_BRAND_HIVE_ID = '133267'; // Replace with your actual Hive brand ID
  
    (function(h,i,v,e,s,d,k){
      h.HiveSDKObject=s;
      h[s]=h[s]||function(){
        (h[s].q=h[s].q||[]).push(arguments)
      },
      d=i.createElement(v),
      k=i.getElementsByTagName(v)[0];
      d.async=1;
      d.id=s;
      d.src=e+'?r='+parseInt(new Date()/60000);
      k.parentNode.insertBefore(d,k)
    })(window,document,'script','https://cdn-prod.hive.co/static/js/sdk-loader.js','HIVE_SDK');
  
    HIVE_SDK('init', YOUR_BRAND_HIVE_ID, function(data){
      // Initialization success callback
      console.log('Hive SDK initialized', data);
    });
  });