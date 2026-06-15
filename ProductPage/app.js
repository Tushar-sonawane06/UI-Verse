const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = './1.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    image.src = './2.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    image.src = './3.png';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );