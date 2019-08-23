// For full API documentation, including code examples, visit http://wix.to/94BuAAs
import wixData from "wix-data";
import wixLocation from 'wix-location';
let url = ""; //establish url as a global var

export function searchButton_click(event) {
    //collpase everything to reset
     $w("#searchStrip").collapse();
     $w("#message1").collapse();
     $w("#table1").collapse();
    
 wixData.query("Restaurants") //select the collection
  .contains("title", $w("#searchBox").value) //column name needs to be lowercase
  .find()  // Run the query

  .then(res => {   
     // Set the table data to be the results of the query     
    $w("#table1").rows = res.items; 
    console.log(res.length)

    //expand necessary parts
    if (res.length>0){
     $w("#searchStrip").expand();
     $w("#table1").expand();
    }
    else{
     $w("#searchStrip").expand();
     $w("#message1").expand();
    }
    $w.onReady(setCols(res));
    });
    $w("#searchBox").value = "";
}

//redirect to website link on click
export function table1_rowSelect(event) {
    let rowNum = event.rowIndex;
    console.log("row number " + rowNum);
    console.log(url[rowNum]);
    wixLocation.to(url[rowNum]);
	 
}

export function searchList_change_1(event) {
 console.log("hurrrrr");
 //collpase everything to reset
     $w("#searchStrip").collapse();
     $w("#message1").collapse();
     $w("#table1").collapse();
     
wixData.query("Restaurants") 
  // Query the collection for any items whose "Name" field contains  
  // the value the user selected in the dropdown
  .contains("location", $w("#searchList").value)
  .find()  // Run the query
  .then(res => {   
     // Set the table data to be the results of the query
     $w("#table1").rows = res.items; 
    //expand necessary parts
    if (res.length>0){
     $w("#searchStrip").expand();
     $w("#table1").expand();
    }
    else{
     $w("#searchStrip").expand();
     $w("#message1").expand();
    }
    $w.onReady(setCols(res));
     
      

   });
}

export function setCols(event){  
   //set cols
    $w("#table1").columns = [{
     "id":"col1",
    "dataPath":"logo",
    "label":"Logo",
    "type":"image",
    "linkPath": "link-field-or-property"
    },{
    "id": "col2",
    "dataPath": "title",
    "label": "Title",
    "type": "string",
    "linkPath":"link-field-or-property"
    },{
    "id": "col3",
    "dataPath": "address",
    "label": "Address",
    "type": "string",
    "linkPath": "link-field-or-property"
     },{
    "id":"col4",
    "dataPath":"location",
    "label":"Location",
    "type":"string",
    "linkPath": "link-field-or-property"
     }];

if (event.length>0){
    url = new Array(event.length); //change global url to an array now that we have the length
    for (let i = 0; i < event.length; ++i){
        url[i] = event.items[i].link; 
       // console.log(i + url + '\n');
    }
      }
   }
    
