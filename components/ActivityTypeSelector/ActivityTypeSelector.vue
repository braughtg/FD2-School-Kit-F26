<template>
  <div>
    <BFormGroup
      id="component-group"
      data-cy="component-group"
    >
      <SelectorBase
        id="activity-observation-type"
        data-cy="activity-observation-type"
        label="Type"
        invalidFeedbackText="An activity type is required."
        v-bind:options="activityTypes"
        v-bind:required="required"
        v-bind:showValidityStyling="showValidityStyling"
        v-on:valid="handleValid"
        v-on:update:selected="handleSelected"
      />
    </BFormGroup>
  </div>
</template>

<script>
  import SelectorBase from '../SelectorBase/SelectorBase.vue';
  import * as farmosUtil from '@libs/farmosUtil/farmosUtil.js';

  /**
   * The ActivityTypeSelector allows the user to select a type of activity (e.g., planting, harvesting, or irrigation).
   *
   * The ActivityTypeSelector component a list of all of the log categories representing activity types for the user to select from.
   *
   * ## Live Example
   *
   * <a href="https://%HOST_NAME%/fd2_examples/activity_type_selector">The ActivityTypeSelector Example</a>
   *   - Example Source: <a href="./ActivityTypeSelector.ex.src.md">modules/farm_fd2_examples/src/entrypoints/activity_type_selector/App.vue</a>
   *   - Component Source: <a href="./ActivityTypeSelector.comp.src.md">components/ActivityTypeSelector/ActivityTypeSelector.vue</a>
   *
   * ## Usage Example
   *
   * ```html
   * Include an example of how to add this component to a template.
   * This can often be pulled from the example page for the component.
   * See the other components in the `components` directory for samples.
   * ```
   *
   * ## `data-cy` Attributes
   *
   * Attribute Name              | Description
   * ----------------------------| -----------
   * `component-group`           | The `BFormGroup` component containing this component.
   * `activity-observation-type` | The `SelectorBase` component used to select the activity type.
   */
  export default {
    name: 'ActivityTypeSelector',
    components: {
      SelectorBase,
    },
    emits: ['ready', 'valid', 'update:selected'],
    props: {
      /**
       * Whether a selected activity type is required or not.
       */
      required: {
        type: Boolean,
        default: false,
      },
      // /**
      //  * The currently selected activity type.
      //  */
      // selected: {
      //   type: String,
      //   default: '',
      // },
      /**
       * Whether validity styling should appear on input elements.
       */
      showValidityStyling: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        activityTypes: [],
      };
    },
    computed: {},
    methods: {
      handleValid(event) {
        /**
         * The validity of the base component has changed.
         * @property {boolean} event whether the base component is valid or not.
         */
        this.$emit('valid', event);
      },
      handleSelected(event) {
        /**
         * The selected activity type has changed.
         * @property {string} event the newly selected activity type.
         */
        this.$emit('update:selected', event);
      },
    },
    watch: {},
    async created() {
      let logCategoryObjects = await farmosUtil.getLogCategories();
      this.activityTypes = logCategoryObjects.map(
        (category) => category.attributes.name
      );

      /**
       * The component is ready for use.
       */
      this.$emit('ready');
    },
  };
</script>
