let infor = document.getElementById("information");                         
    async function fetchAsync(){
       let response= await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"); 
      let data = await response.json();
      return data;
    }

        fetchAsync()
          .then((data =>{
              console.log("TodoList",data);
           
               data.map((item)=>{
               let create = document.createElement('tr'); 
                             create.innerHTML=`<td><img src="${item.image}" height="30">
                                                           ${item.name}      </td>
                                                <td> ${(item.symbol).toUpperCase()} </td>
                                                <td> $${item. current_price} </td>
                                                <td> $ ${item.total_volume} </td>
                                                <td class="color">${Math.round(item.price_change_percentage_24h)} % </td>
                                                <td> Mkt Cap :$ ${item.market_cap} </td> 
                                                `
                                                  
                                        infor.append(create);
                                 
                                        return item;
                                  })
           
                                }))
                              .catch(error=>console.error(error));

              
       



