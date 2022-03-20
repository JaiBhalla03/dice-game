const labelcolor={color:'yellow',"text-shadow":"0px 0px 5px #ffff66"};
const default_labelcolor={color:'white',"text-shadow":"none"}

const dice1={"background-image":"url('dice1.png')","background-size":"cover","board-radius":"10px"};
const dice2={"background-image":"url('dice2.png')","background-size":"cover","board-radius":"10px"};
const dice3={"background-image":"url('dice3.png')","background-size":"cover","board-radius":"10px"};
const dice4={"background-image":"url('dice4.png')","background-size":"cover","board-radius":"10px"};
const dice5={"background-image":"url('dice5.png')","background-size":"cover","board-radius":"10px"};
const dice6={"background-image":"url('dice6.png')","background-size":"cover","board-radius":"10px"};
const p1={"background-image":"url('p111.png')","background-size":"cover","board-radius":"10px"};
const p2={"background-image":"url('p22.png')","background-size":"cover","board-radius":"10px"};
const d={"background-image":"url('d1.png')","background-size":"cover","board-radius":"10px"};

$(document).ready(function(){
	$("#board #options .start_button").click(function()
	{
		$("#scoreboard #scoreboard_inner tr .head1").text($("#board #options #options1 .text_input1").val())
		$("#scoreboard #scoreboard_inner tr .head2").text($("#board #options #options1 .text_input2").val())
	})
})

let x=0;
let y=0;

$(document).ready(function(){
	$("#board #options #options1 ul li .radio11").click(function()
	{
			$("#board #options #options1 ul li #label1").css(labelcolor)
			$("#board #options #options1 ul li #label2").css(default_labelcolor)
			x=1;
	})
})

$(document).ready(function(){
	$("#board #options #options1 ul li .radio22").click(function()
	{
			$("#board #options #options1 ul li #label2").css(labelcolor)
			$("#board #options #options1 ul li #label1").css(default_labelcolor)
			y=1;
	})
})

let c=0;
let a=0;
let b=0;

$(document).ready(function(){
	$("#board #dice_space #main_button .roll").click(function()
	{
		const rn=Math.floor(Math.random()*6)+1;
		let list1=['row1','row2','row3','row4','row5','row6'];
		let list2=['row11','row22','row33','row44','row55','row66'];
		if(rn==1){
			$("#board #dice_space #dice_space1").css(dice1);
			c+=1
		}
		if(rn==2){
			$("#board #dice_space #dice_space1").css(dice2);
			c+=1
		}
		if(rn==3){
			$("#board #dice_space #dice_space1").css(dice3);
			c+=1
		}
		if(rn==4){
			$("#board #dice_space #dice_space1").css(dice4);
			c+=1
		}
		if(rn==5){
			$("#board #dice_space #dice_space1").css(dice5);
			c+=1
		}
		if(rn==6){
			$("#board #dice_space #dice_space1").css(dice6);
			c+=1
		}

		if(x==1){
			if(c==1){
				$(".main_body #scoreboard #scoreboard_inner tr .row1").text(rn);
				a+=rn;
			}
			if(c==2){
				$(".main_body #scoreboard #scoreboard_inner tr .row11").text(rn);
				b+=rn;
			}
			if(c==3){
				$(".main_body #scoreboard #scoreboard_inner tr .row2").text(rn);
				a+=rn;
			}
			if(c==4){
				$(".main_body #scoreboard #scoreboard_inner tr .row22").text(rn);
				b+=rn;
			}
			if(c==5){
				$(".main_body #scoreboard #scoreboard_inner tr .row3").text(rn);
				a+=rn;
			}
			if(c==6){
				$(".main_body #scoreboard #scoreboard_inner tr .row33").text(rn);
				b+=rn;
			}
			if(c==7){
				$(".main_body #scoreboard #scoreboard_inner tr .row4").text(rn);
				a+=rn;
			}
			if(c==8){
				$(".main_body #scoreboard #scoreboard_inner tr .row44").text(rn);
				b+=rn;
			}
			if(c==9){
				$(".main_body #scoreboard #scoreboard_inner tr .row5").text(rn);
				a+=rn;
			}
			if(c==10){
				$(".main_body #scoreboard #scoreboard_inner tr .row55").text(rn);
				b+=rn;
			}
			if(c==11){
				$(".main_body #scoreboard #scoreboard_inner tr .row6").text(rn);
				a+=rn;
				$(".main_body #scoreboard #scoreboard_inner tr .row7").text(a);
			}
			if(c==12){
				$(".main_body #scoreboard #scoreboard_inner tr .row66").text(rn);
				b+=rn;
				$(".main_body #scoreboard #scoreboard_inner tr .row77").text(b);
				if(a>b){
					$("#board #dice_space #dice_space1").css(p1);
				}
				if(b>a){
					$("#board #dice_space #dice_space1").css(p2);
				}
				if(a==b){
					$("#board #dice_space #dice_space1").css(d);
				}
			}
		}
		if(y==1){

			if(c==1){
				$(".main_body #scoreboard #scoreboard_inner tr .row11").text(rn);
				b+=rn;
			}
			if(c==2){
				$(".main_body #scoreboard #scoreboard_inner tr .row1").text(rn);
				a+=rn;
			}
			if(c==3){
				$(".main_body #scoreboard #scoreboard_inner tr .row22").text(rn);
				b+=rn;
			}
			if(c==4){
				$(".main_body #scoreboard #scoreboard_inner tr .row2").text(rn);
				a+=rn;
			}
			if(c==5){
				$(".main_body #scoreboard #scoreboard_inner tr .row33").text(rn);
				b+=rn;
			}
			if(c==6){
				$(".main_body #scoreboard #scoreboard_inner tr .row3").text(rn);
				a+=rn;
			}
			if(c==7){
				$(".main_body #scoreboard #scoreboard_inner tr .row44").text(rn);
				b+=rn;
			}
			if(c==8){
				$(".main_body #scoreboard #scoreboard_inner tr .row4").text(rn);
				a+=rn;
			}
			if(c==9){
				$(".main_body #scoreboard #scoreboard_inner tr .row55").text(rn);
				b+=rn;
			}
			if(c==10){
				$(".main_body #scoreboard #scoreboard_inner tr .row5").text(rn);
				a+=rn;
			}
			if(c==11){
				$(".main_body #scoreboard #scoreboard_inner tr .row66").text(rn);
				b+=rn;
				$(".main_body #scoreboard #scoreboard_inner tr .row77").text(b);
			}
			if(c==12){
				$(".main_body #scoreboard #scoreboard_inner tr .row6").text(rn);
				a+=rn;
				$(".main_body #scoreboard #scoreboard_inner tr .row7").text(a);
				if(a>b){
					$("#board #dice_space #dice_space1").css(p1);
				}
				if(b>a){
					$("#board #dice_space #dice_space1").css(p2);
				}
				if(a==b){
					$("#board #dice_space #dice_space1").css(d);
				}
			}
			
		}
	})
})