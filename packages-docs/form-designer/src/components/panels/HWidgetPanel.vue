<template>
  <div class="widget-list">
    <div v-for="(widgetGroup, groupIndex) in widgetGroups" :key="groupIndex">
      <div class="widget-title">
        {{ widgetGroup.title }}
      </div>
      <draggable
        v-model="widgetGroup.list"
        item-key="schemaName"
        draggable=".widget-item"
        :sort="false"
        :group="{ name: 'widgetGroup', pull: 'clone', put: false }"
        :clone="cloneWidget">
        <template #item="{ element }">
          <div class="widget-item" @click="addWidget(element)">
            <div class="widget-body">
              <q-icon :name="element.icon"></q-icon>
              {{ element.title }}
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Draggable from 'vuedraggable';

import { Widget, DataObject } from '/@/declarations';
import { useDataObjectStore } from '/@/lib/stores';
import { WIDGET_DEFINITIONS, DataObjectUtils } from '/@/lib/utils';

export default defineComponent({
  name: 'HWidgetPanel',

  components: {
    Draggable
  },

  setup() {
    const widgetGroups = WIDGET_DEFINITIONS;
    const store = useDataObjectStore();

    const cloneWidget = (widget: Widget) => {
      const dataObject = DataObjectUtils.create(widget);
      console.log(dataObject);
      return dataObject;
    };

    /**
     * 向Modeler中添加组件
     */
    const addWidget = (widget: Widget) => {
      const dataObject = cloneWidget(widget);
      storeDataObject(dataObject);
    };

    const storeDataObject = (dataObject: DataObject) => {
      store.addDataObject(dataObject);
    };

    return {
      widgetGroups,
      cloneWidget,
      addWidget
    };
  }
});
</script>

<style lang="scss" scoped>
$selectedColor: #e0e0e0;
$lighterBlue: #1867c0;

.widget-list {
  padding: 8px;
  box-sizing: border-box;
  height: 100%;
  .widget-item {
    display: inline-block;
    width: 48%;
    margin: 1%;
    transition: transform 0ms !important;
  }
}

.widget-title {
  font-size: 14px;
  color: #222;
  margin: 6px 2px;
}

.widget-draggable {
  padding-bottom: 20px;
}

.widget-body {
  padding: 8px 10px;
  background: $selectedColor;
  cursor: move;
  border: 1px dashed $selectedColor;
  border-radius: 3px;
  &:hover {
    border: 1px dashed #1565c0;
    background: #e3f2fd;
    color: #1565c0;
    .q-icon {
      color: #1565c0;
    }
  }
}
</style>
