'use strict'
function findInArr(arr,n){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==n){
			return true;
		}
	}
	return false;
}
function getByClass(obj,sClass){
	var arr=[];
	var aEle=obj.getElementsByTagName('*');
	for(var i=0;i<aEle.length;i++){
		var aClass=aEle[i].className.split(' ');
		if(findInArr(aClass,sClass)){
			arr.push(aEle[i]);
		}
	}
	return arr;
}









