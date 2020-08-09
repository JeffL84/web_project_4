class UserInfo{
  constructor(name, job, avatar){
      this._name = document.querySelector(name);
      this._job = document.querySelector(job);
      this._avatar = document.querySelector(avatar);
  }

  
  getUserInfo(){
    const userName = this._name.textContent;
    const userJob = this._job.textContent;
    const userAvatar = this._avatar.src;
    return [userName, userJob, userAvatar];    
  }
  
  setUserInfo(array){
    this._name.textContent = array[0];
    this._job.textContent = array[1];
    this._avatar.src = array[2];
  }

  changeUserAvatar(avatarLink) {
    this._avatar.src=avatarLink;
  }


}
export default UserInfo ;