function me(name, height){
    this.name = name;
    this.height= height;
}

var me1 = new me ("bala", "180cm height");
    console.log("I am " + me1.name, "I am " + me1.height);
