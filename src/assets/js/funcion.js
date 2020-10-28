

function ejemplo(){
    $(function(){
        $(".item").dxDraggable({
          group: "itemsGroup",
          onDragEnd: function(e) {
            if(e.toData === "dropArea") {
              let $dropArea = e.toComponent.element();
              if($dropArea.hasClass(e.itemElement.attr("id"))) {
                $dropArea.append(e.itemElement);
              }
            }
    
            if(!$(".items").children().length) {
              $(".picture").addClass("completed");
            }
    
            e.cancel = true;
          }
        });
      
      $(".dropArea").dxDraggable({
        data: "dropArea",
        group: "itemsGroup",
        onDragStart: function(e) {
          e.cancel = true;
        }
      });
    });
    
}

function ejemploAudio() {
  var sound = new Howl({
    src: ['/assets/audio/correcto1.mp3'],
    volume: 0.5
  });
  sound.play()
}


function alerta(){
  Swal.fire({
    title:'<img src="/assets/imagenes/bien.gif" width="100" height="100"/>',
    imageUrl: '/assets/imagenes/niveles/felicidades.png',
    imageWidth: 150,
    imageHeight: 50,
   // html:"<img src=assets/imagenes/bien.gif/>"
  });
}



