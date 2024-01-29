let item1,item2,item3,item4
item1 =document.querySelector('.img1')
item2 =document.querySelector('.img2')
item3 =document.querySelector('.img3')
item4 =document.querySelector('.img4')



function img1(id){

   if(id == 'img1'){
item1.style.top='0'
item2.style.left='-100%'
item3.style.right='-100%'
item4.style.bottom='-100%'

   }else  if(id == 'img2'){
    item1.style.top='-100%'
    item2.style.left='0'
    item3.style.right='-100%'
    item4.style.bottom='-100%'

   }else  if(id == 'img3'){
    item1.style.top='-100%'
    item2.style.left='-100%'
    item3.style.right='0'
    item4.style.bottom='-100%'
   }else  if(id == 'img4'){
    item1.style.top='-100%'
    item2.style.left='-100%'
    item3.style.right='-100%'
    item4.style.bottom='0'

   }


   for(var nmer in id){
    


   }


}