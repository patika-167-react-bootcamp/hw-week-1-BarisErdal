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
  
  function remove (foldersArr,fileId, folderId) {
      let indexFolder,indexFile;
    foldersArr.every(folder=>{
        if(folder.id === folderId){
            indexFolder=foldersArr.files.indexOf()
            folder.files.every(file=>{
                if (file.id === fileId) {indexFile = file.id;
                return false}
            });
            return false;
        };});



    foldersArr[indexFolder].files.splice(indexFile,indexFile);
  }


remove(folders,3,5);
  /* 
  move(17,6) // dosyayı klasöre taşıyacak
  copy(18,7) // kopyasını oluşturacak
  remove(17) // dosyayı silecek
  removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
  parentFolderOf(17) // ==> 5 */