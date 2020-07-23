class UserInfo{
  constructor(name, job){
      this._name = name;
      this._job = job;
  }
  getUserInfo(){
    const userName = document.querySelector(this._name).textContent;
    const userJob = document.querySelector(this._job).textContent;
    return [userName, userJob];    
  }
  
  setUserInfo(array){
    document.querySelector(this._name).textContent = array[0];
    document.querySelector(this._job).textContent = array[1];
  }
}
export default UserInfo ;