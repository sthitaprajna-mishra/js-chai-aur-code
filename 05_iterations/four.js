const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for(const key in myObject)
{
    // console.log(key, ':', myObject[key])
}

const programming = ["js", "rb", "py", "cpp"]

for(const key in programming)
{
    console.log(key);
    console.log(programming[key]);
}
