alert("Wellcome to My Gallery")

var i = 1
//localStorage.getItem('currentid2');
//console.log(i)




function next() {
   // console.log(i)
    i++;
    if (i == 2) {

        document.getElementById('img').src = 'kingfisher.jpg'
        document.getElementById('pre').removeAttribute('disabled')
        //localStorage.setItem('currentid2',i)

    }
    if (i == 3) {
        document.getElementById('img').src = 'hunter.jpg'
        //localStorage.setItem('currentid2',i)


    }
    if (i == 4) {
        document.getElementById('img').src = 'china buff.jpg'
        
        //localStorage.setItem('currentid2',i)
     

    }


    if (i == 5) {
        document.getElementById('img').src = 'peacock.jpg'
    }
    if (i == 6) {
        document.getElementById('img').src = 'towardshome.jpg'
    }  

    if (i == 7) {
        document.getElementById('img').src = 'two.jpg'
    }

    if (i == 8) {
        document.getElementById('img').src = 'kagan.jpg'
    }

    if (i == 9) {
        document.getElementById('img').src = 'colorfulsparrow.jpg'
    }

    if (i == 10) {
        document.getElementById('img').src = 'thar.jpg'
        document.getElementById('next').setAttribute('disabled', true)
        
    }

     

    if(i>10){
        alert("no value")
    }

}

function pre() {
    i--;

    if (i == 1) {
        document.getElementById('img').src = './sparrow.jpg'
        document.getElementById('pre').setAttribute('disabled', true)
        //localStorage.setItem('currentid2',i)
    }
    if (i == 2) {

        document.getElementById('img').src = 'kingfisher.jpg'
        //localStorage.setItem('currentid2',i)
        

        
    }
    if (i == 3) {
        document.getElementById('img').src = 'hunter.jpg'
        // document.getElementById('next').removeAttribute('disabled')
       // localStorage.setItem('currentid2',i)


    }


    if (i == 4) {

        document.getElementById('img').src = 'china buff.jpg'}
   
        if (i == 5) {

            document.getElementById('img').src = 'peacock.jpg'}

            if (i == 6) {

                document.getElementById('img').src = 'towardshome.jpg'}

                if (i == 7) {

                    document.getElementById('img').src = 'two.jpg'}
   
                    if (i == 8) {

                        document.getElementById('img').src = 'kagan.jpg'}

                        if (i == 9) {

                            document.getElementById('img').src = 'colorfulsparrow.jpg'
                            document.getElementById('next').removeAttribute('disabled')
                        }


}