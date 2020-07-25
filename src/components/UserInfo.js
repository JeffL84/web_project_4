class UserInfo{
  constructor(name, job){
      this._name = document.querySelector(name);
      this._job = job;
  }

  
  getUserInfo(){
    const userName = this._name.textContent;
    const userJob = document.querySelector(this._job).textContent;
    return [userName, userJob];    
  }
  
  setUserInfo(array){
    this._name.textContent = array[0];
    document.querySelector(this._job).textContent = array[1];
  }
}
export default UserInfo ;