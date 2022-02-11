const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]
  

  function indexFinder (foldersArr,fileId) {
    let indexFile;
    let indexFolder = foldersArr.findIndex(function(folder) {
      
      
      indexFile = folder.files.findIndex(function(file) {
        return file.id === fileId })
    
        if(indexFile>-1) {return true}
          
    })
    
    return [indexFolder, indexFile]
    
    }
    


  function copy (foldersArr,fileId, targetFolderId) {

    let indexFolder, indexFile, targetIndex;

    [indexFolder, indexFile] = indexFinder(foldersArr,fileId);

    targetIndex = foldersArr.findIndex(item=>item.id === targetFolderId);
    
    let fileToMove =  { 
      id: Math.random(), 
      name: foldersArr[indexFolder].files[indexFile].name };
    
    if (foldersArr.hasOwnProperty('files') === false) {
      foldersArr[targetIndex]["files"]=[];
     }

    foldersArr[targetIndex].files.push(fileToMove);      
  }




  function remove (foldersArr,fileId) {
    let indexFolder, indexFile;
    [indexFolder, indexFile] = indexFinder(foldersArr,fileId);
    //console.log("klasör index", indexFolder,"dosya id", indexFile);
    foldersArr[indexFolder].files.splice(indexFile,indexFile+1);
    //console.log(folders[1].files);
  }


  function removeFolder (foldersArr, folderId) {
    let indexFolder;
    indexFolder = foldersArr.findIndex(item=> item.id === folderId);

    foldersArr.splice(indexFolder,indexFolder+1);
  }


  function parentFolderOf (foldersArr,fileId) {
   let indexFolder, indexFile;
    [indexFolder, indexFile] = indexFinder(foldersArr,fileId);
    return foldersArr[indexFolder].id;

  }


  function move (foldersArr,fileId, targetFolderId) {

    let indexFolder, indexFile, targetIndex;
    [indexFolder, indexFile] = indexFinder(foldersArr,fileId);
    
    targetIndex = foldersArr.findIndex(item=>item.id === targetFolderId)
    
    let fileToMove =  { 
      id: foldersArr[indexFolder].files[indexFile].id, 
      name: foldersArr[indexFolder].files[indexFile].name };
    
      if (foldersArr.hasOwnProperty('files') === false) {
        foldersArr[targetIndex]["files"]=[];
       }
    foldersArr[targetIndex].files.push(fileToMove);

    foldersArr[indexFolder].files.splice(indexFile,indexFile+1);

  }


  



