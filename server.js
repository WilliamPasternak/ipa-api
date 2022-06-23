const express = require('express')
const app = express() 
const cors = require('cors')
const PORT = 8000

app.use(cors())

const beers = {
    'duff': {'perceived bitterness': '40-60', 'color': 'cartoon', 'alcohol': '5%', 'flavor': 'Little to none', 'history': 'This is not a real beer. It is an API test!', 'related styles': 'Alamo Beer, Pawtucket Patriot Ale, Teddy Brewski'},
    'english india pale ale': {'perceived bitterness': '40-60', 'color': 'gold to amber', 'alcohol': '5-7.5%', 'flavor': 'Highly hopped and well-attenuated British ale with herbal and floral hop flavor and high hop bitterness. Hop notes are typically supported by caramel and toasty malt flavors.', 'history': 'Pale ale brewed in England that became extremely popular in the 1800s as an export beer for the Indian market. Associated with Burton breweries and their high sulfate water.', 'related styles': 'Ordinary Bitter, Best Bitter, Strong Bitter, American IPA'},
    'american pale ale': {'perceived bitterness': '40-70', 'color': 'gold amber', 'alcohol': '5.5-7.5%', 'flavor': 'This style is defined by the assertive presence of American hops in aroma, flavor, and bitterness. Resinous, citrus hop traits dominate aroma and flavor.', 'history': 'The original “pale” ale of England, commonly exported to India and later adopted for domestic consumption. The first American interpretations of IPA were brewed in the 1970s, and the style found widespread popularity beginning in the 1990s.', 'related styles': 'American Pale Ale, Double IPA, English IPA'},
    'double india pale ale': {'perceived bitterness': '60-120', 'color': 'gold to amber', 'alcohol': '7.5-10%', 'flavor': 'American Pale Ale, Double IPA, English IPA', 'history': 'Born in the mid 1990s from the increasing popularity of hop-forward IPAs.', 'related styles': 'American IPA, American Barleywine'
}
}
 


// If root requested, send index.html Look for it in the current directory (__dirname)
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:beerType',(request,response)=> {
   const beerType = request.params.beerType.toLowerCase()
  // If 
   if(beers[beerType]){
       response.json(beers[beerType])
   }
   else{
       //
       response.json(beer['duff'])
   }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running. Betta Go Catch It!')
})