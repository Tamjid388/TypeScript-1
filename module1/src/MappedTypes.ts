{


    const arr1: number[] = [1, 2, 3, 4]

    const arr2: string[] = ["a", "b", "c"]

    const newArr: string[] = arr1.map((num) => num.toString())

    type Area = {
        height: number,
        width: number
    }

    type MapType = {
        [key in keyof Area]: string
    }



    type AriaType<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AriaType<{ height: string, width: number }> = {
        height: "100",
        width: 23
    }




}