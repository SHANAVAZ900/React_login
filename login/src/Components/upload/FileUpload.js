import React ,{useState}from 'react'

function FileUpload() {
    const[file,setFile]=useState(null);

    const onInputChange =(e) =>{
        setFile(e.target.files[0])

        
    }
    
    
    



    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <form method="post" action="#" id="#" >
                        <div class="form-group files">
                            <label style={{"color":"white"}} >Upload Your File </label>
                            <input type="file"
                            onChange={onInputChange}  
                            class="form-control" 
                            multiple="" />
                        </div>
                        <button style={{"width":"100px","border-radius":"10px","padding":"10px","margin":"10px" }}>Submit</button>
                    </form>
              </div>
           </div>
        </div>
    )
}

export default FileUpload
