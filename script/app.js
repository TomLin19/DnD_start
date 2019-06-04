(() => {
	console.log('fired!');
	// set up the puzzle pieces and boards
	const piecesBoard = document.querySelector(".puzzle-pieces"),
	      puzzleBoard = document.querySelector(".puzzle-board"),
	      puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
	      dropZones = document.querySelectorAll(".drop-zone");

	let draggablePieces =piecesBoard.querySelectorAll("img");

	debugger;
	//
	//
	function switchImage(){
		console.log(this);
        //grap thecorresponding  background image (0,1,2or3)
         // and get it from the images folder ()
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;
          //set background image style on the  dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;

		//debugger;
	}

	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });

	//
	//this let us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');

            // the datatransfer object has two methods,a setter and getter
            // set data on the drag, and retrieve it on the drop 
			e.dataTransfer.setData("text/plain",this.id);
		});
	});
	// this is the d
	dropZones.forEach(zone =>{

		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged sumpin over me');


		});

	    zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped sumpin on me');

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged', draggedElement);
            // add the image to the drop zone
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});

	})
})();
