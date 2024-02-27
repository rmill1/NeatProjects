output = document.querySelector('#output');
ts = document.querySelector('#textstart');
tc = document.querySelector('#textcenter');
te = document.querySelector('#textend');
fwl = document.querySelector('#fwlight');
fwn = document.querySelector('#fwnormal');
fwb = document.querySelector('#fwbold');
fs1 = document.querySelector('#fs1');
fs3 = document.querySelector('#fs3');
fs6 = document.querySelector('#fs6');
tbp = document.querySelector('#tbp');
tbs = document.querySelector('#tbs');
tbd = document.querySelector('#tbd');
bordertoggle = document.querySelector('#borders');
const rows = document.getElementsByClassName('row');
const cols = document.getElementsByClassName('col-4');

// console.log(rows)

// TEXT ALIGNMENT
ts.addEventListener('change', () => {
	if(ts.checked){
		output.classList.add('text-start')
	} else {
		output.classList.remove('text-start')
	}
})
tc.addEventListener('change', () => {
	if(tc.checked){
		output.classList.add('text-center')
	} else {
		output.classList.remove('text-center')
	}
})
te.addEventListener('change', () => {
	if(te.checked){
		output.classList.add('text-end')
	} else {
		output.classList.remove('text-end')
	}
})


// FONT WEIGHT
fwl.addEventListener('change', () => {
	if(fwl.checked){
		output.classList.add('fw-light')
	} else {
		output.classList.remove('fw-light')
	}
})
fwn.addEventListener('change', () => {
	if(fwn.checked){
		output.classList.add('fw-normal')
	} else {
		output.classList.remove('fw-normal')
	}
})
fwb.addEventListener('change', () => {
	if(fwb.checked){
		output.classList.add('fw-bold')
	} else {
		output.classList.remove('fw-bold')
	}
})

// FONT SIZE
fs1.addEventListener('change', () => {
	if(fs1.checked){
		output.classList.add('fs-1')
	} else {
		output.classList.remove('fs-1')
	}
})
fs3.addEventListener('change', () => {
	if(fs3.checked){
		output.classList.add('fs-3')
	} else {
		output.classList.remove('fs-3')
	}
})
fs6.addEventListener('change', () => {
	if(fs6.checked){
		output.classList.add('fs-6')
	} else {
		output.classList.remove('fs-6')
	}
})

// BACKGROUND COLOR
tbp.addEventListener('change', () => {
	if(tbp.checked){
		output.classList.add('text-bg-primary')
	} else {
		output.classList.remove('text-bg-primary')
	}
})
tbs.addEventListener('change', () => {
	if(tbs.checked){
		output.classList.add('text-bg-success')
	} else {
		output.classList.remove('text-bg-success')
	}
})
tbd.addEventListener('change', () => {
	if(tbd.checked){
		output.classList.add('text-bg-danger')
	} else {
		output.classList.remove('text-bg-danger')
	}
})

// TOGGLE GRID BORDERS
bordertoggle.addEventListener('click', () => {
	for(let row of rows){
		row.classList.toggle('border')
		row.classList.toggle('border-black')
		// row.classList.toggle('border-2')
		// console.log(row)
	}
	for(let col of cols){
		col.classList.toggle('border')
		col.classList.toggle('border-black')
		// col.classList.toggle('border-2')
	}
})