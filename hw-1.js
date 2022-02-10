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
  
  function remove (foldersArr,fileId) {
    let indexFolder, indexFile;

    indexFolder = foldersArr.findIndex(function(folder) {
      return folder.files.some(function(file) {
        return file.id === fileId;
  })
});
 

    indexFile = foldersArr[indexFolder].files.findIndex(item=> item.id === fileId);

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
    let indexParentFolder;

    indexParentFolder = foldersArr.findIndex(function (folder) {
      return folder.files.some(function(file) {
        return file.id === fileId;
  })
});
let idP = foldersArr[indexParentFolder].id
console.log(idP,"index of P");
return idP;

  }


//remove(folders,21);
//removeFolder(folders,7);
parentFolderOf(folders,21);
  /* 
  move(17,6) // dosyayı klasöre taşıyacak
  copy(18,7) // kopyasını oluşturacak
  ****remove(17) // dosyayı silecek
  ****removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
  ****parentFolderOf(17) // ==> 5 */