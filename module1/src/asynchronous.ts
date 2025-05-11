{

    const Mypromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Something"
            if (data) {
                resolve(data)

            } else {
                reject("Failed To Load Data")
            }
        })
    }


    const myData = async () => {
        const data = await Mypromise()
        console.log(data);
    }
    myData()













}