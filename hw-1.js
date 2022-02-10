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

    indexFolder = foldersArr.findIndex(item=> item.id === folderId);
    indexFile = foldersArr[indexFolder].files.findIndex(item=> item.id === fileId);

    //console.log("klasör index", indexFolder,"dosya id", indexFile);
    foldersArr[indexFolder].files.splice(indexFile,indexFile+1);
    //console.log(folders[1].files);
  }


//remove(folders,21,6);
  /* 
  move(17,6) // dosyayı klasöre taşıyacak
  copy(18,7) // kopyasını oluşturacak
  remove(17) // dosyayı silecek
  removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
  parentFolderOf(17) // ==> 5 */