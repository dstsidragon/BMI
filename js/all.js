

//DOM
var _heightTxt = document.querySelector('.heightinput');
var _weightTxt = document.querySelector('.weightinput');
var _inputBtn  = document.querySelector('.inputbtn');
var _BMIList   = document.querySelector('.BMIList');
var _header    = document.querySelector('.header');
var _btnchange = document.querySelector('.btnchange');
var _btnchangetitle = document.querySelector('.btnchangetitle');
var _btnchangecontent = document.querySelector('.btnchangecontent');
var _btnchangeanser   = document.querySelector('.btnchangeanser');
var _btnrestar = document.querySelector('.btnrestar');
var _BMIList   =document.querySelector('.BMIList');
var _list      = document.querySelector('.list');
var _delAllred  =document.querySelector('.delAllred');
var data =JSON.parse(localStorage.getItem('BMIdata'))||[];

//取得今日日期
var _Today=new Date();
var _day = _Today.getDay();


//送出身高體重值判斷結果
function senddata(e){
    e.preventDefault();
    let BMIvalue = _weightTxt.value/((_heightTxt.value/100)*(_heightTxt.value/100));
    //取得小數第二位
    // e.target.value = (Math.round(BMIvalue*100)/100);
   let  BMIcolor = "";
    //判斷BMI範圍改變顯示
    if(0<(Math.round(BMIvalue*100)/100)&(Math.round(BMIvalue*100)/100)<18.5){
        // console.log('體重過輕');
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #31BAF9;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#31BAF9;');
        _btnchangecontent.setAttribute('style','color:#31BAF9;');
        _btnchangeanser.setAttribute('style','color:#31BAF9;');
        _btnrestar.setAttribute('style','background-color:#31BAF9;');
        BMIcolor = "#31BAF9";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="體重過輕";

    }else if( (Math.round(BMIvalue*100)/100)>=18.5&&(Math.round(BMIvalue*100)/100)<24){
        // console.log('標準體重')
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #86D73E;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#86D73E;');
        _btnchangecontent.setAttribute('style','color:#86D73E;');
        _btnchangeanser.setAttribute('style','color:#86D73E;');
        _btnrestar.setAttribute('style','background-color:#86D73E;');
        BMIcolor = "#86D73E";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="標準體重";

    }else if((Math.round(BMIvalue*100)/100)<27&&(Math.round(BMIvalue*100)/100)>=24){
        // console.log('體重過重');
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #FF982D;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#FF982D;');
        _btnchangecontent.setAttribute('style','color:#FF982D;');
        _btnchangeanser.setAttribute('style','color:#FF982D;');
        _btnrestar.setAttribute('style','background-color:#FF982D;');
        BMIcolor = "#FF982D";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="體重過重";
    }else if( (Math.round(BMIvalue*100)/100)<30&&(Math.round(BMIvalue*100)/100)>=27){
        // console.log('輕度肥胖');
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #FF6C02;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#FF6C02;');
        _btnchangecontent.setAttribute('style','color:#FF6C02;');
        _btnchangeanser.setAttribute('style','color:#FF6C02;');
        _btnrestar.setAttribute('style','background-color:#FF6C02;');
        BMIcolor = "#FF6C02";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="輕度肥胖";
    }else if((Math.round(BMIvalue*100)/100)<35&&(Math.round(BMIvalue*100)/100)>=30){
        // console.log('中度肥胖');
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #FF6C02;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#FF6C02;');
        _btnchangecontent.setAttribute('style','color:#FF6C02;');
        _btnchangeanser.setAttribute('style','color:#FF6C02;');
        _btnrestar.setAttribute('style','background-color:#FF6C02;');
        BMIcolor = "#FF6C02";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="中度肥胖";
    }else if((Math.round(BMIvalue*100)/100)>=35){
        // console.log('重度肥胖')
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #FF1200;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#FF1200;');
        _btnchangecontent.setAttribute('style','color:#FF1200;');
        _btnchangeanser.setAttribute('style','color:#FF1200;');
        _btnrestar.setAttribute('style','background-color:#FF1200;');
        BMIcolor = "#FF1200";
        //改變值
        _btnchangetitle.textContent=(Math.round(BMIvalue*100)/100);
        _btnchangeanser.textContent="重度肥胖";
    }else{
        // console.log('錯誤')
        //顯示轉換數據
        _btnchange.setAttribute('style','display:block;border:6px solid #dc143c;');
        //隱藏看結果按鈕
        _inputBtn.setAttribute('style','display:none;');
        //改變顏色
        _btnchangetitle.setAttribute('style','color:#dc143c;');
        _btnchangecontent.setAttribute('style','color:#dc143c;');
        _btnchangeanser.setAttribute('style','color:#dc143c;');
        _btnrestar.setAttribute('style','background-color:#dc143c;');
        BMIcolor = "#dc143c";
        //改變值
        _btnchangetitle.textContent="錯誤!";
        _btnchangeanser.textContent="格式有誤";
    }
    //資料記錄到localStorage
    
    let BMIdataList = {
        BMIrange :  _btnchangeanser.textContent,
        BMIanser :(Math.round(BMIvalue*100)/100),
        weight: _weightTxt.value,
        height : _heightTxt.value,
        date : _Today.getUTCFullYear()+'-'+(_Today.getMonth()+1)+'-'+_Today.getDate(),
        bmicolor1 :BMIcolor,
       
    }
    data.push(BMIdataList);
    updata(data);
    localStorage.setItem('BMIdata',JSON.stringify(data));
   
};

//重新整理
function refresh(e){
    e.preventDefault();
    window.location.reload();
};

//更新數據
function updata(items){
    let str = '';
    for(let i = 0; i < items.length;i++){
        str+= `<li data-num='${i}' class="list" style="border-left:6px solid ${items[i].bmicolor1};"><h2 class="list1">${items[i].BMIrange}</h2><p class="list2">BMI</p><h2 class="list3">${items[i].BMIanser}</h2><p class="list4">WEIGHT</p><h2 class="list5">${items[i].weight}KG</h2><p class="list6">HEIGHT</p><h2 class="list7">${items[i].height}CM</h2><p class="list8">${items[i].date}</p></li>`
    }    
    _BMIList.innerHTML= str;
};


//刪除紀錄
function delAllRecord(e){
    
    data.splice('BMIdataList',999);
    updata(data);
    localStorage.setItem('BMIdata',JSON.stringify(data));
};

//

/*事件*/ 
//送出身高體重值判斷結果
_inputBtn.addEventListener('click',senddata,false);
//重新整理
_btnrestar.addEventListener('click',refresh,false);
// _heightTxt.addEventListener('click',refresh,false);
// _weightTxt.addEventListener('click',refresh,false);
//刪除紀錄
_delAllred.addEventListener('click',delAllRecord,false);
//初始化
function init(){
    updata(data)
};




//初始化執行
window.onload = function(){ 
    init( ) }

