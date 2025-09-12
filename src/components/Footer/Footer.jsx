import '../../styles/footer.css';

function Footer() {

  return (
    <footer style={{textAlign:'center', padding:'20px', backgroundColor: '#da222', color: 'black'}}>
        <div className="bottom-bar">
              <p className="logo" >Designed & Developed By</p>
              <p className="name">
                &copy; {new Date().getFullYear()} Satish Kumar Yadav
              </p>
        </div>
               
    </footer>   
  )
}

export default Footer



 