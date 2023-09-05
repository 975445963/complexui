// .stylelintrc.js
module.exports = {
// 继承的预设，这些预设包含了规则集插件
  extends: [
    // 代码风格规则
    'stylelint-stylistic/config',
    // 基本 less 规则
    'stylelint-config-standard-less',
    // 如果是vue项目，需要添加
    'stylelint-config-recommended-vue',
  ],
  rules: {
    // 自定义规则集的启用 / 禁用
    // 'stylistic/max-line-length': null,
    'stylistic/max-line-length': 100,
  },
  overrides: [
    // 若项目中存在less文件，添加以下配置
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
    },
  ],
};
