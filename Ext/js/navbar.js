Ext.ns("Patton");

Patton.navbar = function(){
  return {
    region: 'center',
    xtype: 'treepanel',
    rootVisible: false,
    lines: false,
    root: new Ext.tree.AsyncTreeNode({
      expanded: true,
      children: Patton.navdata
    })
  };
};