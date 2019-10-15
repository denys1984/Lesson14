    let myArray = {
        array: [1,2,3,4,5],
        map: (func) => {
        let len = myArray.array.length;
        let copyArr = [...myArray.array];
        for (let i = 0; i < len; i++) {
            myArray.array[i] = func(copyArr[i], i, copyArr);
        }
        }
    }
    
    myArray.map((item, index, arr)=> `item = ${item}, index = ${index}, array = ${arr}`);
    console.log(myArray.array);