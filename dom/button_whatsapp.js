export default function BtnWtspClose(MesageWtsp, Btn) {

  document.addEventListener("click", (e) => {
    if (e.target.matches(Btn)) {
      const $Mesage = document.querySelector(`${MesageWtsp}`);
      $Mesage.style.opacity = '0';
      $Mesage.style.visibility = 'hidden';
    }
  })

}