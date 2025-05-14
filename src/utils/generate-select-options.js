function generateSelectOptions(inputs, labelKey ='id') {
    if(!inputs || !Array.isArray(inputs)){
        return []
    }
    const options = inputs?.map((input)=> ({
            value:input.id,
            label:input[labelKey]
        
    }))
}

export default generateSelectOptions