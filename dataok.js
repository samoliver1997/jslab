let data = new Date();

let snapshotname = `qrpoint-stage-cluster-snapshot-${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()}`

console.log(snapshotname);