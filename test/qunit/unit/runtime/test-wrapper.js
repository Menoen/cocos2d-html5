module('wrapper');

test('Node', function() {
    var node = new cc.Node();
    var nodeWrapper = cc.getWrapper(node);

    strictEqual(nodeWrapper.targetN, node, 'target of wrapper');
    strictEqual(nodeWrapper.isScene, false, 'not scene');
});

test('SceneNode', function() {
    var dummyScene = new cc.Scene();
    var dummySceneWrapper = cc.getWrapper(dummyScene);

    strictEqual(dummySceneWrapper.isScene, true, 'isScene');
});

test('root', function() {
    var node = new cc.Node();
    var nodeWrapper = cc.getWrapper(node);
    var node2 = new cc.Node();
    var nodeWrapper2 = cc.getWrapper(node2);
    var scene = new cc.Scene();
    var sceneWrapper = cc.getWrapper(scene);

    strictEqual(nodeWrapper.root, nodeWrapper, 'root should be itself if no parent');

    node2.addChild(node);
    strictEqual(nodeWrapper.root, nodeWrapper2, 'root should be parent');

    scene.addChild(node2);
    strictEqual(nodeWrapper.root, sceneWrapper, 'root should be top most parent(scene)');
});