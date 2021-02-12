const keystone = require('keystone');
const Types = keystone.Field.Types;

const Incoming_IP = new keystone.List('Incoming_IP', {
    track: true,
    nocreate: true,
});

Incoming_IP.add({
    IP:            {type: String, required: true, index: true, initial: true},
    TotalSessions: {type: Types.Number, required:true, index:true, initial:true},
    blockIp:       {type: Types.Boolean},
    remarks:       {type: Types.Textarea},
});

Incoming_IP.defaultColumns = 'IP, TotalSessions, remarks, blockIp,';
Incoming_IP.register();

Incoming_IP.model.schema.pre('save', async function (next) {
    if(this.blockIp){
        let Blocked_IP = keystone.list('Blocked_IP').model;
        console.log(this.IP);
        isBlocked = await Blocked_IP.findOne({IP: this.IP}).catch(err => {console.log(err)});

        if(!isBlocked){
            let blockedIp = new Blocked_IP({
                IP: this.IP,
                Remarks: this.remarks,
            });
            await blockedIp.save();
        }
        Blocked_IP.findOne({ IP:this.IP }, function (err, doc){
            // console.log('doc', doc);
            doc.Remarks=this.remarks;
            doc.save((err)=>console.log(err));
        });
    }
    next();
});


