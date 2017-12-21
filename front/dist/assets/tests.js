'use strict';

define('front/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/score.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/score.js should pass ESLint\n\n');
  });

  QUnit.test('routes/simulator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/simulator.js should pass ESLint\n\n');
  });

  QUnit.test('routes/truck.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/truck.js should pass ESLint\n\n');
  });
});
define('front/tests/helpers/destroy-app', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = destroyApp;
	var run = Ember.run;
	function destroyApp(application) {
		run(application, 'destroy');
	}
});
define('front/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'front/tests/helpers/start-app', 'front/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (name) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		(0, _qunit.module)(name, {
			beforeEach: function beforeEach() {
				this.application = (0, _startApp.default)();

				if (options.beforeEach) {
					return options.beforeEach.apply(this, arguments);
				}
			},
			afterEach: function afterEach() {
				var _this = this;

				var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
				return resolve(afterEach).then(function () {
					return (0, _destroyApp.default)(_this.application);
				});
			}
		});
	};

	var resolve = Ember.RSVP.resolve;
});
define('front/tests/helpers/start-app', ['exports', 'front/app', 'front/config/environment'], function (exports, _app, _environment) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = startApp;
	var merge = Ember.merge;
	var run = Ember.run;
	function startApp(attrs) {
		var attributes = merge({}, _environment.default.APP);
		attributes = merge(attributes, attrs); // Use defaults, but you can override;

		return run(function () {
			var application = _app.default.create(attributes);
			application.setupForTesting();
			application.injectTestHelpers();
			return application;
		});
	}
});
define('front/tests/test-helper', ['front/app', '@ember/test-helpers', 'ember-qunit'], function (_app, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create({ autoboot: false }));

  (0, _emberQunit.start)();
});
define('front/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/score-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/score-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/simulator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/simulator-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/truck-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/truck-test.js should pass ESLint\n\n');
  });
});
define('front/tests/unit/routes/home-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/score-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:score', 'Unit | Route | score', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/simulator-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:simulator', 'Unit | Route | simulator', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('front/tests/unit/routes/truck-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:truck', 'Unit | Route | truck', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('front/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
