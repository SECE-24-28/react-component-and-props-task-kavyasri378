function Student({name,course,duration}){//instead of props we can use destructuring like function Student({title})
    return <>
    <h1>{name}</h1>
    <h2>{course}</h2>
    <h3>{duration}</h3>
    </>
}

export default Student;