Ext.ns("Patton");

Patton.static_routes = [
['172.16.53.0','255.255.255.0','*','US','0','0','eth0','172.16.53.130'],
['192.168.1.0','255.255.255.0','*','US','0','0','eth0','192.168.1.10'],
['192.168.200.0','255.255.255.0','*','US','0','0','eth0','192.168.200.10']
];

Patton.flags_renderer = function(value,meta,record,rowIdx,colIdx,store){
  meta.attr = "ext:qtip = '<b>C</b> - dhCp<br><b>D</b> - Dynamic<br><b>G</b> - use Gateway<br><b>H</b> - target is a Host<br><b>R</b> - useR<br><b>U</b> - route is Up<br><b>S</b> - System'";
  return value;
};

Patton.addStaticRoute = function(){
  var win = new Ext.Window({
    width: 350,
    title: 'New Static Route',
    id: 'staticroutewindow',
    layout: 'form',
    items:[{
      xtype: 'textfield',
      fieldLabel: 'Destination IP'
    },{
      xtype: 'textfield',
      fieldLabel: 'Netmask',
      id: 'netmask'
    },{
      xtype: 'combo',
      fieldLabel: 'Interface'
    },{
      xtype: 'textfield',
      fieldLabel: 'Gateway'
    },{
      xtype: 'textfield',
      fieldLabel: 'TOS'
    },{
      xtype: 'textfield',
      fieldLabel: 'Local IP'
    },{
      xtype: 'textfield',
      fieldLabel: 'Metic'
    }],
    buttons: [{
      text: 'Add'
    },{
      text: 'Cancel',
      handler: function(){
        Ext.getCmp('staticroutewindow').destroy();
      }
    }]
  });
  win.show();
  
  Ext.QuickTips.register({
    target: 'netmask',
    text: 'Dotted Quad or Slash Notation'
  });
};

Patton.StaticRoute = function(){
  return {
    region: 'center',
    title: 'Static Routes',
    tbar: ['->',{text: 'Add Static Route',handler: Patton.addStaticRoute}],
    layout: 'border',
    items: [{
      xtype: 'grid',
      region: 'center',
      store: new Ext.data.SimpleStore({
        fields: [
          'ip','netmask','gateway','flags','metic','tos','interface','local'
        ],
        data: Patton.static_routes
      }),
      columns: [
        {id:'ip',header: 'IP Address'},
        {id:'netmask',header: 'Netmask'},
        {id:'gateway',header: 'Gateway'},
        {id:'flags',header:'Flags',renderer: Patton.flags_renderer},
        {id:'metric',header:'Metric'},
        {id:'tos',header:'TOS'},
        {id:'interface',header:'Interface'},
        {id:'local',header:'Local IP'}
      ]
    }]
  };
};